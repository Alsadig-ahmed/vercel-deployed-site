// /.netlify/functions/helloWorld
exports.handler = async function (event, context) {
	// process.env.helloWorld = 'helloWorld';
    console.log(event);
    return{
        statusCode:200,
        body:JSON.stringify({msg:'hello World'})
    }
};
