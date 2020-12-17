import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  render() {
    return html` 
   
   <form> 
    <input type="text" name="email" placeholder ="Email"> 
    <input type="password" name="pwd" placeholder = "New password">  
    <input type="password" name="oldpwd" placeholder = "Old password">  
    <input type="text" name="firstName" placeholder = "First Name">  
    <input type="text" name="lastName" placeholder = "Last Name">  
    <input type="text" name="uid" placeholder = "User id">  
    <input type="text" name="uname" placeholder = "Username" required> 
    <button @click="${this.update}" type="button" value="update">Update</button> <br>  
   </form>  


    `;  
    
  } 
  update(e) {
    const data = new FormData(e.target.form);

    //Got this method for sending data from an example given earlier in the course
    data.forEach((value, key) => object[key] = value); 
    const newData = JSON.stringify(object);
    fetch(`api/updateUser.php`, { 
        method: 'POST',
        credentials: "include", 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: newData
    }).then(res => res.json()
    ).then(data => {
        if(data.status=="success") console.log("Update complete."); 
        else console.log("Error: " + data.msg);
    });
}  

}
customElements.define('edit-user', EditUser);
