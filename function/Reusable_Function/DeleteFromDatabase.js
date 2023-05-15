const orderListModel = require("../../Schema_model/OrderListSchema");

async function deleteQueryFromDatabase(collection,query,res,statusCode){
    try {

      const findingData= await collection.findByIdAndDelete(query)
    //   console.log(findingData)
       return res.status(statusCode).send({isDeleted:true,findingData});
     } catch (error) {
       if(error) statusCode=404
       console.log(error)
       return res.status(statusCode).send({ error: error.message });
     }
  }

const deleteFromDatabase = async (collection, res) => {
    try {
        const deleteId = await collection.deleteMany({})
        return res.status(202).send(deleteId)
    } catch (error) {
        return res.status(204).send({ error: error.message })
    }
}
const deleteOrderFromDatabase=async(req,res)=>{
    const query=req.query.id
    deleteQueryFromDatabase(orderListModel,query,res,202)
}


module.exports={deleteFromDatabase,deleteQueryFromDatabase,deleteOrderFromDatabase}