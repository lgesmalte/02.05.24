class Calebe {
    constructor (site) {
        this.site = site; // variável de interface
        // ações
    }

    exibirSite() {
        window.open(this.site);
    }

}

var novoCalebe = new Calebe ("https://onlinepiano.app/pt/");
novoCalebe.exibirSite();