export abstract class View<T> {
    protected elemento : HTMLElement;
    private escapar = false;
    
    constructor (seletor:string, escapar?: boolean){
        const elemento = document.querySelector(seletor); 
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`Verifique se o seletor ${seletor} existe no DOM`);
        }
        
        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model:T):string;

    public update(model:T):void{
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
            console.log('escapar is running');
        }
        this.elemento.innerHTML=template;
    }
}