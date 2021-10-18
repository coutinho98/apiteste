import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create( { 
      nome: "Gabriel",
      sobrenome: 'Toledo',
      email: 'bestawpercalvo@gmail.com',
      idade: 40,
      peso: 93,
      altura: 1.80
     } )
    res.json(novoAluno);
  }
}

export default new Home();
