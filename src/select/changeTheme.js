export const changeTheme = theme => {
    const root = document.querySelector(":root");
    const cssVariable = ['bgimage', 'header'];
    cssVariable.forEach(element => {
        root.style.setProperty(
            `--theme-${element}`,
            `var(--theme-${element}-${theme}`
        );
    })

}