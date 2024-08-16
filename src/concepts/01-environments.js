
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = (element) =>{
    console.log(import.meta.env)

    const html = `<h2>variables</h2>
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        Dev: ${import.meta.env.VITE_API_KEY} <br/>
    `;
    element.innerHTML = html;

}