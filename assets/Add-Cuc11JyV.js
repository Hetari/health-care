import{r as H,c as y,a as s,t as B,g as t,H as u,u as e,o as v,I as o,Y as f,Z as i,J as k,K as x,_ as V,G as R}from"./index-BZv_jbEZ.js";import{a as C,b as U,c as m,d as $,_ as b,e as r}from"./TableRow.vue_vue_type_script_setup_true_lang-C4419Bir.js";const M={class:"space-y-6 p-6"},S={class:"text-3xl font-bold"},T={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},G={class:"mt-4 flex flex-row-reverse gap-4"},F={__name:"Add",setup(I){const d=H({id:"",name:"",age:null,gender:"",ill:"",status:"",label:"",priority:"",doctor:"",lastVisit:null,room:"",contact:"",medications:[],prescriptions:[],healthRecords:[]}),D=()=>{d.value.medications.push({id:Date.now(),name:"",dosage:0,time:""})},N=p=>{d.value.medications.splice(p,1)},A=()=>{d.value.prescriptions.push({id:Date.now(),date:"",details:""})},_=p=>{d.value.prescriptions.splice(p,1)},P=()=>{d.value.healthRecords.push({id:Date.now(),testName:"",date:"",result:"",notes:""})},w=p=>{d.value.healthRecords.splice(p,1)};return(p,l)=>(v(),y("div",M,[s("h1",S,"Patient Details: "+B(d.value.name),1),s("div",T,[s("div",null,[t(e(f),{for:"name"},{default:u(()=>l[10]||(l[10]=[o("Name")])),_:1}),t(e(i),{modelValue:d.value.name,"onUpdate:modelValue":l[0]||(l[0]=a=>d.value.name=a),id:"name"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"age"},{default:u(()=>l[11]||(l[11]=[o("Age")])),_:1}),t(e(i),{modelValue:d.value.age,"onUpdate:modelValue":l[1]||(l[1]=a=>d.value.age=a),id:"age",type:"number"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"gender"},{default:u(()=>l[12]||(l[12]=[o("Gender")])),_:1}),t(e(i),{modelValue:d.value.gender,"onUpdate:modelValue":l[2]||(l[2]=a=>d.value.gender=a),id:"gender"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"ill"},{default:u(()=>l[13]||(l[13]=[o("Illness")])),_:1}),t(e(i),{modelValue:d.value.ill,"onUpdate:modelValue":l[3]||(l[3]=a=>d.value.ill=a),id:"ill"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"status"},{default:u(()=>l[14]||(l[14]=[o("Status")])),_:1}),t(e(i),{modelValue:d.value.status,"onUpdate:modelValue":l[4]||(l[4]=a=>d.value.status=a),id:"status"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"priority"},{default:u(()=>l[15]||(l[15]=[o("Priority")])),_:1}),t(e(i),{modelValue:d.value.priority,"onUpdate:modelValue":l[5]||(l[5]=a=>d.value.priority=a),id:"priority"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"doctor"},{default:u(()=>l[16]||(l[16]=[o("Doctor")])),_:1}),t(e(i),{modelValue:d.value.doctor,"onUpdate:modelValue":l[6]||(l[6]=a=>d.value.doctor=a),id:"doctor"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"lastVisit"},{default:u(()=>l[17]||(l[17]=[o("Last Visit")])),_:1}),t(e(i),{modelValue:d.value.lastVisit,"onUpdate:modelValue":l[7]||(l[7]=a=>d.value.lastVisit=a),id:"lastVisit",type:"date"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"room"},{default:u(()=>l[18]||(l[18]=[o("Room")])),_:1}),t(e(i),{modelValue:d.value.room,"onUpdate:modelValue":l[8]||(l[8]=a=>d.value.room=a),id:"room"},null,8,["modelValue"])]),s("div",null,[t(e(f),{for:"contact"},{default:u(()=>l[19]||(l[19]=[o("Contact")])),_:1}),t(e(i),{modelValue:d.value.contact,"onUpdate:modelValue":l[9]||(l[9]=a=>d.value.contact=a),id:"contact"},null,8,["modelValue"])])]),l[40]||(l[40]=s("h2",{class:"mt-6 text-2xl font-semibold"},"Medications",-1)),s("div",null,[t(e(b),null,{default:u(()=>[t(e(C),null,{default:u(()=>[t(e(U),null,{default:u(()=>[t(e(m),null,{default:u(()=>l[20]||(l[20]=[o("Name")])),_:1}),t(e(m),null,{default:u(()=>l[21]||(l[21]=[o("Dosage (mg)")])),_:1}),t(e(m),null,{default:u(()=>l[22]||(l[22]=[o("Time")])),_:1}),t(e(m),null,{default:u(()=>l[23]||(l[23]=[o("Actions")])),_:1})]),_:1})]),_:1}),t(e($),null,{default:u(()=>[(v(!0),y(k,null,x(d.value.medications,(a,g)=>(v(),R(e(U),{key:a.id},{default:u(()=>[t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.name,"onUpdate:modelValue":n=>a.name=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.dosage,"onUpdate:modelValue":n=>a.dosage=n,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.time,"onUpdate:modelValue":n=>a.time=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(V),{variant:"destructive",onClick:n=>N(g)},{default:u(()=>l[24]||(l[24]=[o("Remove")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(e(V),{class:"mt-4",onClick:D},{default:u(()=>l[25]||(l[25]=[o("Add Medication")])),_:1})]),l[41]||(l[41]=s("h2",{class:"mt-6 text-2xl font-semibold"},"Prescriptions",-1)),s("div",null,[t(e(b),null,{default:u(()=>[t(e(C),null,{default:u(()=>[t(e(U),null,{default:u(()=>[t(e(m),null,{default:u(()=>l[26]||(l[26]=[o("Date")])),_:1}),t(e(m),null,{default:u(()=>l[27]||(l[27]=[o("Details")])),_:1}),t(e(m),null,{default:u(()=>l[28]||(l[28]=[o("Actions")])),_:1})]),_:1})]),_:1}),t(e($),null,{default:u(()=>[(v(!0),y(k,null,x(d.value.prescriptions,(a,g)=>(v(),R(e(U),{key:a.id},{default:u(()=>[t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.date,"onUpdate:modelValue":n=>a.date=n,type:"date"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.details,"onUpdate:modelValue":n=>a.details=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(V),{variant:"destructive",onClick:n=>_(g)},{default:u(()=>l[29]||(l[29]=[o("Remove")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(e(V),{class:"mt-4",onClick:A},{default:u(()=>l[30]||(l[30]=[o("Add Prescription")])),_:1})]),l[42]||(l[42]=s("h2",{class:"mt-6 text-2xl font-semibold"},"Health Records",-1)),s("div",null,[t(e(b),null,{default:u(()=>[t(e(C),null,{default:u(()=>[t(e(U),null,{default:u(()=>[t(e(m),null,{default:u(()=>l[31]||(l[31]=[o("Test Name")])),_:1}),t(e(m),null,{default:u(()=>l[32]||(l[32]=[o("Date")])),_:1}),t(e(m),null,{default:u(()=>l[33]||(l[33]=[o("Result")])),_:1}),t(e(m),null,{default:u(()=>l[34]||(l[34]=[o("Notes")])),_:1}),t(e(m),null,{default:u(()=>l[35]||(l[35]=[o("Actions")])),_:1})]),_:1})]),_:1}),t(e($),null,{default:u(()=>[(v(!0),y(k,null,x(d.value.healthRecords,(a,g)=>(v(),R(e(U),{key:a.id},{default:u(()=>[t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.testName,"onUpdate:modelValue":n=>a.testName=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.date,"onUpdate:modelValue":n=>a.date=n,type:"date"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.result,"onUpdate:modelValue":n=>a.result=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(i),{modelValue:a.notes,"onUpdate:modelValue":n=>a.notes=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(e(r),null,{default:u(()=>[t(e(V),{variant:"destructive",onClick:n=>w(g)},{default:u(()=>l[36]||(l[36]=[o("Remove")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(e(V),{class:"mt-4",onClick:P},{default:u(()=>l[37]||(l[37]=[o("Add Health Record")])),_:1})]),s("div",G,[t(e(V),{variant:"default",type:"submit"},{default:u(()=>l[38]||(l[38]=[o("Save")])),_:1}),t(e(V),{variant:"secondary",type:"button"},{default:u(()=>l[39]||(l[39]=[o("Cancel")])),_:1})])]))}};export{F as default};
