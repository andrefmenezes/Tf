import { bov } from './config'

export default	{
	tickt:(ativo)=>{
		return bov.get('ativo',ativo);
  },    
	
}