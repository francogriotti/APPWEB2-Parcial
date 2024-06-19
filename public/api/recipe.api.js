export const infoRecetas = async ()=>{
    try{
      const response = await fetch('http://localhost:5500/recetas/infoRecetas',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if(!response.ok){
        throw new Error(`Error: ${response.status}`)
      }

      const posts = await response.json()
      return posts
    }catch(error){
      console.error('Error al traer las recetas: ', error)
    }
}

export const agregarRecetas = async(data)=>{
   try{
    const response = await fetch('http://localhost:5500/recetas/agregarRecetas',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }

    const res = await response.json()
    return res

   }catch(error){
    console.error('Error al crear un post: ', error)
   }
}

export const infoIngredientes = async ()=>{
    try{
      const response = await fetch('http://localhost:5500/ingredientes/agregarIngredientes',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if(!response.ok){
        throw new Error(`Error: ${response.status}`)
      }

      const posts = await response.json()
      return posts
    }catch(error){
      console.error('Error al traer posts: ', error)
    }
}

export const agregarIngredientes = async(data)=>{
   try{
    const response = await fetch('http://localhost:5500/ingredientes/infoIngredientes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }

    const res = await response.json()
    return res

   }catch(error){
    console.error('Error al crear un post: ', error)
   }
}