import { api } from './config'

export default	{

	salvar:(ativo)=>{
		//console.log('SALVAR',user)
		return api.post('ativo',ativo);
  },
    
	atualizar:(ativo)=>{
		return api.put('ativos/'+ativo.id_ativo,ativo);
  },

  listar:()=>{
		return api.get('ativo')
  },
    
	apagar:(ativo)=>{
		//console.log('USER de', user); 
		//console.log('de', user.id_user);
		return api.delete('ativo/'+ativo.id_ativo, { data: ativo })
	}
}
