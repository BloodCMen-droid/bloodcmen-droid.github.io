const productos = [
  {
    nombre: "Poleras Personalizadas",
    descripcion: "",
    cantidad: 2,
    precio: "165 aprox",
    unidad: "piezas",
    imagen: "/IMG/Card_Index/Card_01.webp",
    idSeccion: "grupo-Poleras_Estampado"
  },
  {
    nombre: "Polos Personalizados",
    descripcion: "Polo personalizado con estampado y diseño exclusivo",
    cantidad: 1,
    precio: "30 aprox",
    unidad: "pieza",
    imagen: "/IMG/Card_Index/Card_02.webp",
    idSeccion: "grupo-Polo-estampado"
  },
  {
    nombre: "Poleras Personalizadas Familia",
    descripcion: "Poleras personalizadas para familia con estampado combinado",
    cantidad: 3,
    precio: "215 aprox",
    unidad: "piezas",
    imagen: "/IMG/Card_Familia_Estampado/Card_Pol_Familia_estamapado_01.webp",
    idSeccion: "grupo-Familia-estampado"
  },
  {
    nombre: "Pijamas Personalizadas",
    descripcion: "Pijamas personalizadas cómodas con diseño exclusivo",
    cantidad: 4,
    precio: "125 aprox",
    unidad: "piezas",
    imagen: "/IMG/Card_Index/Card_03.webp",
    idSeccion: "grupo-Pijamas"
  },
  {
    nombre: "Conjuntos Personalizados",
    descripcion: "Conjuntos personalizados con estampado moderno y duradero",
    cantidad: 4,
    precio: "330 aprox",
    unidad: "piezas",
    imagen: "/IMG/Card_Index/Card_04.webp",
    idSeccion: "grupo-Conjuntos_Estampado"
  }
];



const contenedor = document.getElementById("listaProductos");

if (contenedor) {
    contenedor.innerHTML = "";

    productos.forEach(p => {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card-hm h-100">
                <div class="img-wrapper">
                    <img src="${p.imagen}" 
                    alt="${p.descripcion}"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    class="card-img-top"
                    >
                </div>
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="price">${p.cantidad} ${p.unidad} ≈ S/ ${p.precio}</p>
                   <a href="../HTML/Productos.html#${p.idSeccion}" class="btn-hm mt-auto">Ver más</a>

                </div>
            </div>
        </div>
        `;
    });
} else {
    console.warn("No se encontró el contenedor #listaProductos, código ignorad");
}
