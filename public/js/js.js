function etsiRuokaa() {
    fetch('ruoka.json')
        .then(vastaus => vastaus.json())
        .then(series => {
            console.log(series);
            const app = document.getElementById('app');
            app.innerHTML = series.map(({name, price}) => `
           
            <div>
               <h3>${name}</h3>
                    <h4>${price}</h4> 
               </div>
                 
`).join('');
        })
}

etsiRuokaa();