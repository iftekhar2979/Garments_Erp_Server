const orderListModel = require("../Schema_model/OrderListSchema")
const deliveryDetailModel = require("../Schema_model/deliveredOrderSchema")
const detailsSizesAndDeliverySizes = require("./Reusable_Function/InputSizeAndDeliverySizeReducer")

 const editOrderDetail=async(req,res)=>{
    try{
        const requestedId=req.params.id
        const {details,grandRestTotal,grandTotalQuantity,grandDeliveryQuantity}=req.body
        detailsSizesAndDeliverySizes('deliverySize',details)
        detailsSizesAndDeliverySizes('size',details)
        detailsSizesAndDeliverySizes('restSize',details)
        // console.log(deliverySizes)
        const patchingData=await orderListModel.findByIdAndUpdate(requestedId,req.body,{
            new: true,
         })
       return  res.status(200).send(patchingData)
    }catch(error){
        return res.status(204).send({error:error.message})
    }

}
const editStatus=async(req,res)=>{
    try{
        const requestedId=req.params.id
        console.log(req.body)
        const patchingData=await orderListModel.findByIdAndUpdate(requestedId,req.body,{
            new: true,
         })
        return res.send(patchingData)
    }catch(error){
        return res.status(204).send({error:error.message})
    }
}
const editDeliveryMan=async(req,res)=>{
    const requestedId=req.params.id
     const body=req.body
   
     try{
         const patchingData=await deliveryDetailModel.findByIdAndUpdate(requestedId,body,{
             new: true,
          })
          return res.status(200).send(patchingData)
     }catch(error){
         console.log(error)
         return res.status(404).send({error:error.message})
 
     }
 }

module.exports={editOrderDetail,editStatus,editDeliveryMan}