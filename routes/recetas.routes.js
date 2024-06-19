import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const router = Router();

const fileUser = await readFile("./data/recetas.json", "utf-8");
const recetas = JSON.parse(fileUser);

router.post("/agregarRecetas", async (req, res) => {
    const { nombre, ingredientes } = req.body;
  
    try {
      const nuevaReceta = recetas.find((e) => e.nombre === nombre);
      if (nuevaReceta) {
        return res.status(400).json({ message: "La receta ya existe" });
      } else {
        const id = recetas.length + 1;
        const nuevaReceta = { id, nombre, ingredientes };
        recetas.push(nuevaReceta);
        await writeFile(
          "./data/recetas.json",
          JSON.stringify(recetas, null, 2)
        );

        res.json({ message: "Receta cargada con éxito" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al cargar la receta" });
    }
  });

  router.get("/infoRecetas", async (req, res) => {
    try {
      res.status(200).json(recetas);
    } catch (error) {
      res.send(500).json({ message: "No se pudieron listar las recetas" });
    }
  });

  export default router