# rctNtvAppCatalogoItens
App4


> Cliente HTTP Axios
> Instação: 
npm install --save-dev babel-preset-es1015

npm install --save-dev babel-preset-react

npm install --save axios

> Utilizando o axios
import axios from 'axios';

no componentWillMount
axios.get('url')
.then( response => {console.log('')} )
.catch( () => {console.log('erro ')} )

-------

criacao do this.state = { listaItens : [] }
no then ( this.setState( { listaItens: response.data })  )

-------

utilizando o map no render

{this.state.listaItens.map(
	function(item){
		console.log(item);	
	}
)}

{this.state.listaItens.map(
	function(item){
		return ( <Text key={item.titulo}> {item.titulo}</text>);	
	}
)}

aula - 118--
