import"./assets/styles-Bt1FwKqz.js";const e={email:"",message:""};document.addEventListener("input",a=>{const{name:t,value:m}=a.target;t==="email"?e.email=m.trim():t==="message"&&(e.message=m.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email||"",e.message=t.message||"",document.querySelector('[name="email"]').value=e.email,document.querySelector('[name="message"]').value=e.message}});document.querySelector(".feedback-form").addEventListener("submit",a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",document.querySelector(".feedback-form").reset()});
//# sourceMappingURL=2-form.js.map
