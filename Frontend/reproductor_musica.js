const reproductorMusica = {
    estado : "play", 
    play : cancion => {
        if(this.estado === "play"){
            console.log(`Comenzando reproduccion de cancion... ${cancion}`)
            this.estado = "play"
        }else{
        console.log(`Cancion en ejecucion: Stop para terminar...`)
        }            
    },
    stop: function(){
        if(this.estado === "apagado"){
            console.log(`Reproduccion ya esta apagado...`)
        }else{
            console.log(`apagando reproductor...`)
            this.estado = "apagado"
        }
        
    },

    getestado : function() {
        return this.estado
    },
    setestado : function(estado){
        this.estado = estado
    }
}


reproductorMusica.play("himno nacional")