import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const router = Router();

const fileUser = await readFile("./data/ingredientes.json", "utf-8");
const ingrediente = JSON.parse(fileUser);

router.post("/agregarIngredientes", async (req, res) => {
    const { nombre } = req.body;
  
    try {
      const nuevoIngrediente = ingrediente.find((e) => e.nombre === nombre);
      if (nuevoIngrediente) {
        return res.status(400).json({ message: "El ingrediente ya existe" });
      } else {
        const id = ingrediente.length + 1;
        const nuevoIngrediente = { id , nombre };
        ingrediente.push(nuevoIngrediente);
        await writeFile(
          "./data/ingredientes.json",
          JSON.stringify(ingrediente, null, 2)
        );

        res.json({ message: "Ingrediente cargado con éxito" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al cargar el ingrediente" });
    }
  });

  router.get("/infoIngredientes", async (req, res) => {
    try {
      res.status(200).json(ingrediente);
    } catch (error) {
      res.send(500).json({ message: "No se pudieron listar los ingredientes" });
    }
  });

export default router