function escolher(opcao) {
    const historiaDiv = document.getElementById('historia');

    if (opcao === 'entrar') {
        historiaDiv.innerHTML = `
            <p>Você decide entrar na mansão. A atmosfera é opressiva e um silêncio perturbador toma conta do lugar. Você encontra uma escada antiga e um corredor escuro. Para onde você vai?</p>
            <button onclick="escolher('escada')">Subir pela escada</button>
            <button onclick="escolher('corredor')">Explorar o corredor</button>
        `;
    } else if (opcao === 'voltar') {
        historiaDiv.innerHTML = `
            <p>Você decide voltar para a estrada e seguir em frente com sua vida. Fim da história.</p>
        `;
    } else if (opcao === 'escada') {
        historiaDiv.innerHTML = `
            <p>Você sobe pela escada e encontra um quarto com um espelho coberto por um lençol. Você pode levantar o lençol para ver o espelho ou investigar uma caixa no canto do quarto. O que você faz?</p>
            <button onclick="escolher('espelho')">Levantar o lençol</button>
            <button onclick="escolher('caixa')">Investigar a caixa</button>
        `;
    } else if (opcao === 'corredor') {
        historiaDiv.innerHTML = `
            <p>Você explora o corredor e encontra uma porta entreaberta. Ao empurrar a porta, você vê uma biblioteca cheia de livros antigos e poeira. Você pode olhar os livros ou seguir para outra porta no final do corredor. O que fazer?</p>
            <button onclick="escolher('livros')">Olhar os livros</button>
            <button onclick="escolher('outra_porta')">Seguir para outra porta</button>
        `;
    } else if (opcao === 'espelho') {
        historiaDiv.innerHTML = `
            <p>Você levanta o lençol e vê um espelho empoeirado. De repente, uma figura sombria aparece atrás de você no espelho. Ao se virar, você não vê ninguém. O que você faz?</p>
            <button onclick="escolher('investigar')">Investigar a figura</button>
            <button onclick="escolher('fugir')">Fugir do quarto</button>
        `;
    } else if (opcao === 'caixa') {
        historiaDiv.innerHTML = `
            <p>Você abre a caixa e encontra uma foto antiga com uma mensagem escrita atrás. A mensagem diz: "A chave para escapar está escondida no sótão". Você decide procurar o sótão.</p>
            <button onclick="escolher('sotao')">Procurar o sótão</button>
        `;
    } else if (opcao === 'livros') {
        historiaDiv.innerHTML = `
            <p>Você começa a olhar os livros e encontra um volume que parece fora do lugar. Ao puxá-lo, um mecanismo é acionado e uma parede secreta se abre revelando um altar com uma caixa antiga. Você pode abrir a caixa ou voltar para o corredor. O que faz?</p>
            <button onclick="escolher('altar')">Abrir a caixa</button>
            <button onclick="escolher('voltar')">Voltar para o corredor</button>
        `;
    } else if (opcao === 'outra_porta') {
        historiaDiv.innerHTML = `
            <p>Você segue para a outra porta e entra em um salão com um grande candelabro. O salão está cheio de teias de aranha e um vento frio sopra. Você encontra uma escada que leva ao sótão. O que você faz?</p>
            <button onclick="escolher('sotao')">Subir para o sótão</button>
            <button onclick="escolher('explorar_salao')">Explorar o salão</button>
        `;
    } else if (opcao === 'investigar') {
        historiaDiv.innerHTML = `
            <p>Você se aproxima do espelho e vê a figura se aproximando. Quando você toca o espelho, uma onda de frio te envolve e a figura sombria te arrasta para dentro do espelho. Fim da história.</p>
        `;
    } else if (opcao === 'fugir') {
        historiaDiv.innerHTML = `
            <p>Você decide fugir do quarto e desce a escada correndo. Ao sair da mansão, você sente um alívio, mas o mistério da mansão nunca deixa sua mente. Fim da história.</p>
        `;
    } else if (opcao === 'sotao') {
        historiaDiv.innerHTML = `
            <p>Você encontra a entrada para o sótão e sobe as escadas. No sótão, você encontra uma antiga caixa de segurança. Ao abrir, encontra uma chave e um bilhete dizendo: "A chave é para a saída secreta na biblioteca".</p>
            <button onclick="escolher('biblioteca')">Voltar para a biblioteca</button>
        `;
    } else if (opcao === 'altar') {
        historiaDiv.innerHTML = `
            <p>Você abre a caixa do altar e encontra um antigo livro de feitiços. Ao folhear as páginas, um feitiço é ativado e a mansão começa a desmoronar. Você consegue escapar por pouco, mas a mansão está perdida para sempre. Fim da história.</p>
        `;
    } else if (opcao === 'explorar_salao') {
        historiaDiv.innerHTML = `
            <p>Você explora o salão e encontra um painel oculto na parede. Ao ativar o painel, uma passagem secreta se abre, levando a um túnel subterrâneo que leva para fora da mansão. Você consegue escapar e a mansão permanece um mistério. Fim da história.</p>
        `;
    } else if (opcao === 'biblioteca') {
        historiaDiv.innerHTML = `
            <p>Você volta para a biblioteca e usa a chave encontrada no sótão para abrir uma porta secreta. Atrás da porta, você encontra uma saída que leva você para fora da mansão. Parabéns, você escapou!</p>
        `;
    }
}
