document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('browsers').addEventListener('click', (event) => {
        let ligne = event.target;

        if (event.target.localName === 'td' && event.target.querySelector('input') === null) {
            let text = event.target.textContent;
            console.log(event.target);

            let input = document.createElement('input');
            input.value = text;

            event.target.textContent = '';
            event.target.appendChild(input);

            input.addEventListener('dblclick', () => {
                let td = document.createElement('td');
                td.textContent = input.value;


                event.target.textContent = '';
                event.target.appendChild(td);
            });
        }
    });
});
