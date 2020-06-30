import { api } from './config'

export default	{

	salvar:(prov)=>{
		//console.log('SALVAR',user)
		return api.post('prov',prov);
  },
    
	atualizar:(prov)=>{
		return api.put('provs/'+prov.id_prov,prov);
  },

  listar:()=>{
		return api.get('prov')
  },
    
	apagar:(prov)=>{
		//console.log('USER de', user); 
		//console.log('de', user.id_user);
		return api.delete('prov/'+prov.id_prov, { data: prov })
	}
}