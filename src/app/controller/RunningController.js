
class RunningController {
    
    constructor(
        GetRunning = get('GetRunning'),
    ) {
       this.getRunning = GetRunning
        
    }

    get = async function (req, res) 
    {
        try {
            res.json(await new this.getRunning().execute(req.params.userId).catch(console.log("erro")));
        } catch (error) {
            console.error('Erro capturado:', error);
        }
        
    }

    create = async function (req, res) {
   
    }
    
    update = async function (req, res) {
       
    }

    delete = async function (req, res) {
       
    }
}

module.exports = RunningController;