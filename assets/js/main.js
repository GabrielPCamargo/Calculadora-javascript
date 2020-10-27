function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaTeclaValida();

        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        pressionaTeclaValida(){
            let teclasPermitidas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '/', '*', '+', '-', '.']

            this.display.addEventListener('keypress', e => {
                e.preventDefault();
                if(teclasPermitidas.includes(e.key)){
                    console.log(typeof e.key);
                    this.display.value += e.key;
                }
            })
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida!');
                    return;
                }
                
                this.display.value = conta
            }catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}


const calculadora = criaCalculadora();
calculadora.inicia();