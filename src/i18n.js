import { createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: "es",
    messages: {
        es: {
            alPageName: "Hola, este es el nombre de la pagina",
            pageName: "Nombre de la pagina",
            alBtnHome: "Boton para redigir a la pagina de inicio",
            btnHome: "Inicio",
            btnNav: "Navegar",
            alBtnNav: "Boton para ir a la seccion navegar",



            logo: "Este es el logo de la empresa",
            job: "Este es el trabajo de la empresa",
            company: "Este el nombre empresa",
            category:" Esta es la categoria de la empresa",
            salary: "Este es el salario ",
            date: "Esta es la fecha de publicacion",
            description: "Esta es la descripcion del trabajo",


            copyright: "Los derechos reservados",
            developer: "Desarrollador de la pagina",
            copyrightContent: "© 2023 RESTJob, inc Todos los derechos reservados.",
            developerContent: "Desarrollado por Jennifer Espinoza",

            titlePageNotFound: "Titutlo de Pagina no encontrada",
            pageNotFound: "Lo siento, página no encontrada",
            pageNotFoundContent: "La página que buscas no existe o ha sido movida.",
            btnReturnHome: "Regresar al Inicio",
            alBtnReturnHome: "Boton para regresar a la pagina de inicio",


        },
        en:{
            alPageName: "Hello, this is the name of the page",
            btnHome: "Home",
            alBtnHome: "Button to redirect to the home page",
            btnNav: "Navigate",
            alBtnNav: "Button to go to the navigate section",
            pageName: "Page Name",

            logo: "This is the logo of the company",
            job: "This is the job of the company",
            company: "This is the name of the company",
            category: "This is the category of the company",
            salary: "This is the salary",
            date: "This is the publication date",
            description: "This is the job description",

            copyright: "All rights reserved",
            developer: "Page developer",
            copyrightContent: "©2023 RESTJob, inc All rights reserved.",
            developerContent: "Developed by Jennifer Espinoza",

            pageNotFound: "Sorry, Page not found",
            pageNotFoundContent: "The page you are looking for does not exist or has been moved.",
            btnReturnHome: "Return to Home",
            alBtnReturnHome: "Button to return to the home page",
        }
    },
});

export default i18n;