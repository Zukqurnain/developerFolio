import React from 'react'
 
import WhatsAppWidget from 'react-whatsapp-widget'
import './WhatsApp.css'
import {WhatsAppDetails} from '../../portfolio'
 
const WhatsApp = () => {
  if(!WhatsAppDetails.display){
    return null
  }
  return <WhatsAppWidget
    style={{marginBottom : "85px" , marginRight : "0"}}
    textReplyTime={WhatsAppDetails?.textReplyTimetextReplyTime || "Typically replies within a day"}
    companyName={WhatsAppDetails?.companyName || "Support"}
    phoneNumber={WhatsAppDetails?.number || ""}
   />
}

export default WhatsApp