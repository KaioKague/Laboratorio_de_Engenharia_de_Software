
let contador = 0;
let contador2 = 0;
let contador3 = 0;

    const contadorDiv = document.getElementById('corpo');
    
    const container1 = document.createElement('div');
    container1.className = 'contador';
    const container2 = document.createElement('div');
    container2.className = 'contador';
    const container0 = document.createElement("div");
    container0.className = 'contador';
    const container4 = document.createElement('div');
    container4.className = 'contadores';

    const total = document.createElement('h2');
    total.id = 'total';
    total.textContent ='Total';

    const numeroDisplay = document.createElement('div');
        numeroDisplay.className = 'numero';
    numeroDisplay.textContent = contador3;

    const numeroDisplay1 = document.createElement('div');
        numeroDisplay1.className = 'numero';
    numeroDisplay1.textContent = contador;

    const botaoIncrementar1 = document.createElement('button');
    botaoIncrementar1.textContent = 'Adicionar';
    botaoIncrementar1.className = 'incrementar';
    botaoIncrementar1.onclick = () => {
        contador++;
        contador3++;
        numeroDisplay1.textContent = contador;
        numeroDisplay.textContent = contador3;
    };

    const botaoDecrementar1 = document.createElement('button');
    botaoDecrementar1.textContent = 'Remover';
    botaoDecrementar1.className = 'decrementar';
    botaoDecrementar1.onclick = () => {
        if (contador > 0) {
            contador--;
            contador3--;
            numeroDisplay1.textContent = contador;
            numeroDisplay.textContent = contador3;
        }
    };


    const numeroDisplay2 = document.createElement('div');
        numeroDisplay2.className = 'numero';
    numeroDisplay2.textContent = contador2;

    const botaoIncrementar2 = document.createElement('button');
    botaoIncrementar2.textContent = 'Adicionar';
    botaoIncrementar2.className = 'incrementar';
    botaoIncrementar2.onclick = () => {
        contador2++;
        contador3++;
        numeroDisplay2.textContent = contador2;
        numeroDisplay.textContent = contador3;
    };

    const botaoDecrementar2 = document.createElement('button');
    botaoDecrementar2.textContent = 'Remover';
    botaoDecrementar2.className = 'decrementar';
    botaoDecrementar2.onclick = () => {
        if (contador2 > 0) {
            contador2--;
            contador3--;
            numeroDisplay2.textContent = contador2;
            numeroDisplay.textContent = contador3;
        }
    };

    const but1 = document.createElement('div');
    but1.className = 'Dbut';
    const but2 = document.createElement('div');
    but1.className = 'Dbut';

    const img1 = document.createElement('img');
    img1.className = 'image';
    img1.src = 'icon/homem.png';
    const img2 = document.createElement('img');
    img2.className = 'image';
    img2.src = 'icon/mulher.png';

    container0.appendChild(total);
    container0.appendChild(numeroDisplay);
    contadorDiv.appendChild(container0);

    container1.appendChild(img1);
    container1.appendChild(numeroDisplay1);
    but1.appendChild(botaoIncrementar1);
    but1.appendChild(botaoDecrementar1);
    container1.appendChild(but1);
    container4.appendChild(container1);

    container2.appendChild(img2);
    container2.appendChild(numeroDisplay2);
    but2.appendChild(botaoIncrementar2);
    but2.appendChild(botaoDecrementar2);
    container2.appendChild(but2);
    container4.appendChild(container2);

    contadorDiv.appendChild(container4);

    
    var css = `body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    .contador {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
    }
    .contadores{
        display: flex;
        flex-direction: row;
    }
    #corpo{
        display: flex;
        flex-direction: column;
        border: 2px solid #007BFF;
        border-radius: 10px;
        background-color: white;
    }
    .numero {
        font-size: 20px;
        font-weight: bold;
        margin: 20px 0;
        border: solid 1px #ccc;
        border-width: 2px;
        width: 100px;
    }
    button {
        padding: 10px 20px;
        font-size: 16px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .incrementar {
        background-color: #28a745;
        color: white;
    }
    .decrementar {
        background-color: #dc3545;
        color: white;
    }
    
    .image{
        height: 80px;
        width: 80px;
    }`;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);