
const textosPerros = [
    "El perro esquimal americano es una raza originaria de América del Norte, utilizada como perro de trineo y compañía. Tienen un pelaje grueso y blanco, cuerpo musculoso y compacto, y son activos, inteligentes y leales. Son excelentes competidores en deportes caninos como el mushing, el agility y el obedience. Como mascotas, son una buena opción para aquellos que buscan un perro activo y leal, pero necesitan mucho ejercicio diario y una dieta adecuada para mantenerse saludables. Su historia como perros de trineo los hace ser perros muy resistentes y capaces de soportar condiciones climáticas extremas.",
    "El perro toy poodle es una raza pequeña de perro que se ha vuelto muy popular en todo el mundo como mascota de compañía. Son conocidos por su inteligencia, su pelo rizado y su personalidad vivaz. Estos perros son juguetones y activos, pero también pueden ser entrenados para ser tranquilos y cariñosos. Son buenos compañeros para personas mayores y para aquellos que viven en apartamentos debido a su tamaño pequeño. El toy poodle también es una excelente opción para aquellos que sufren de alergias ya que su pelaje rizado no produce tanto pelo.",
    "El Yorkshire Terrier, también conocido como Yorkie, es una raza pequeña de perro que se originó en Yorkshire, Inglaterra. Estos perros son muy populares como mascotas debido a su tamaño pequeño, su pelaje sedoso y su personalidad divertida y enérgica. A menudo son descritos como tercos, pero también son muy leales y cariñosos con sus dueños. Los Yorkshire Terriers son excelentes compañeros de apartamentos y pueden adaptarse fácilmente a la vida en interiores. Debido a su tamaño pequeño, también son fáciles de transportar y son una gran opción para aquellos que buscan un perro pequeño y cariñoso.",
];

const contentModal = document.querySelector(".content-modal");

const cambiarSizeContent = () => {
    if(window.innerHeight < 630) {
        contentModal.style.width = "auto";
        contentModal.style.height = "90%";
    } else {
        contentModal.style.height = "auto";
        contentModal.style.width = "90%";
    }
};

cambiarSizeContent();

window.addEventListener("resize", () => {
    cambiarSizeContent();
});

const modal = document.querySelector(".modal");

const containerImgsDogs = document.querySelectorAll(".container-img-dog");
const imgsDogs = document.querySelectorAll(".img-dog");
const btnLeft = document.querySelector(".left-arrow");
const btnRight = document.querySelector(".right-arrow");
const textoCambiable = document.querySelector(".texto-cambiable");

const buscarContainerActive = () => {
    let i;
    for(i = 0; i < containerImgsDogs.length; i++) {
        if(containerImgsDogs[i].classList.contains("active")) {
            containerImgsDogs[i].classList.remove("active");
            break;
        }
    }
    return i;
}

btnLeft.addEventListener("click", (e) => {
    const i = buscarContainerActive();
    if(i === 0) {
        containerImgsDogs[containerImgsDogs.length - 1].classList.add("active");
        textoCambiable.textContent = textosPerros[containerImgsDogs.length - 1]
    } else {
        containerImgsDogs[i-1].classList.add("active");
        textoCambiable.textContent = textosPerros[i-1]
    }
});

btnRight.addEventListener("click", (e) => {
    const i = buscarContainerActive();
    if(i === (containerImgsDogs.length - 1)) {
        containerImgsDogs[0].classList.add("active");
        textoCambiable.textContent = textosPerros[0]
    } else {
        containerImgsDogs[i+1].classList.add("active");
        textoCambiable.textContent = textosPerros[i+1]
    }
});

containerImgsDogs.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        
    });
});