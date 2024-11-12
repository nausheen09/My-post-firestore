import { getFirestore, collection, addDoc } from "./firebase.js";


// let selectedImage = '';
// Function to select the image for the post background
// function selectImage(imgElement) {
//     selectedImage = imgElement.src;
// }

// // Function to add a new post with the selected image as background
// function addPost() {
//     const postTitle = document.getElementById('post-title');
//     const postDescription = document.getElementById('post-description');
//     const posts = document.getElementById('posts');

//     if (postTitle.value.trim() && postDescription.value.trim() && selectedImage) {
//         posts.innerHTML += `
//                 <div class="card mb-3" style="background-image: url('${selectedImage}');">
//                     <div class="card-header fontStyle">@Posts</div>
//                     <div class="card-body">
//                         <h5 class="card-title fontStyle">${postTitle.value}</h5>
//                         <p class="card-text fontStyle">${postDescription.value}</p>
//                     </div>
//                     <div class="button p-4">
//                         <button type="button" class="btn btn-primary color-blue" onclick="edit(event)">Edit</button>
//                         <button type="button" class="btn btn-primary color-red" onclick="remove(event)">Delete</button>
//                     </div>
//                 </div>`;
//         postTitle.value = '';
//         postDescription.value = '';
//         selectedImage = '';  // Reset the selected image
//     } else {
//         Swal.fire({
//             title: "No input",
//             text: "Please enter a title, description, and select an image.",
//             icon: "question"
//         });
//     }
// }

// // Function to remove a post
// function remove(event) {
//     event.target.parentNode.parentNode.remove();
// }

// // Function to edit a post
// async function edit(event) {
//     const postCard = event.target.parentNode.parentNode;
//     const currentTitle = postCard.children[1].children[0].innerText;
//     const currentDescription = postCard.children[1].children[1].innerText;

//     const { value: formValues } = await Swal.fire({
//         title: 'Edit Post',
//         html: `
//                 <label>Title:</label>
//                 <input id="swal-input1" class="swal2-input" value="${currentTitle}">
//                 <label>Description:</label>
//                 <input id="swal-input2" class="swal2-input" value="${currentDescription}">
//                 `,
//         focusConfirm: false,
//         preConfirm: () => {
//             return [
//                 document.getElementById('swal-input1').value,
//                 document.getElementById('swal-input2').value
//             ];
//         }
//     });

//     if (formValues) {
//         postCard.querySelector('.card-title').innerText = formValues[0];
//         postCard.querySelector('.card-text').innerText = formValues[1];
//     }
// }


// ======================firestore======
let selectedImage = '';

function selectImage(imgElement) {
    selectedImage = imgElement.src;
    console.log(selectedImage)
}
selectImage()

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async ()=>{
    let postTitle = document.getElementById("post-title");
    let postDescription =document.getElementById("post-description");
    let posts = document.getElementById('posts');

    // -------Add data-------
    try {
        const docRef = await addDoc(collection(db, "users"), {
          postTitle: postTitle.value,
          postDescription: postDescription.value,

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    //   =======
   
    if (postTitle.value.trim() && postDescription.value.trim() && selectedImage) {
        posts.innerHTML += `
                <div class="card mb-3" style="background-image: url('${selectedImage}');">
                    <div class="card-header fontStyle">@Posts</div>
                    <div class="card-body">
                        <h5 class="card-title fontStyle">${postTitle.value}</h5>
                        <p class="card-text fontStyle">${postDescription.value}</p>
                    </div>
                    <div class="button p-4">
                        <button type="button" class="btn btn-primary color-blue" onclick="edit(event)">Edit</button>
                        <button type="button" class="btn btn-primary color-red" onclick="remove(event)">Delete</button>
                    </div>
                </div>`;
        postTitle.value = '';
        postDescription.value = '';
        selectedImage = '';  // Reset the selected image
    } else {
        Swal.fire({
            title: "No input",
            text: "Please enter a title, description, and select an image.",
            icon: "question"
        });
    }



})






// -===============================chtgpt-----
// let selectedImage = '';

// function selectImage(imgElement) {
//     selectedImage = imgElement.src;
//     // console.log("Selected image URL: ", selectedImage);
// }
// // selectImage()

// const images = document.querySelectorAll(".image-row img"); // Assuming images are in a div with class "image-row"
// images.forEach(img => {
//     img.addEventListener("click", () => selectImage(img));
// });

// let submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", () => {
//     let postTitle = document.getElementById("post-title");
//     let postDescription = document.getElementById("post-description");
//     let posts = document.getElementById('posts');
   
//     console.log( postTitle.value, postDescription.value)
    // -------Add data to Firebase-------
    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         postTitle: postTitle.value,
    //         postDescription: postDescription.value,
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    // // -------Display post if fields are filled-------
    // if (postTitle.value.trim() && postDescription.value.trim() && selectedImage) {
    //     posts.innerHTML += `
    //         <div class="card mb-3" style="background-image: url('${selectedImage}');">
    //             <div class="card-header fontStyle">@Posts</div>
    //             <div class="card-body">
    //                 <h5 class="card-title fontStyle">${postTitle.value}</h5>
    //                 <p class="card-text fontStyle">${postDescription.value}</p>
    //             </div>
    //             <div class="button p-4">
    //                 <button type="button" class="btn btn-primary color-blue" onclick="edit(event)">Edit</button>
    //                 <button type="button" class="btn btn-primary color-red" onclick="remove(event)">Delete</button>
    //             </div>
    //         </div>`;
    //     postTitle.value = '';
    //     postDescription.value = '';
    //     selectedImage = '';  // Reset the selected image
    // } else {
    //     Swal.fire({
    //         title: "No input",
    //         text: "Please enter a title, description, and select an image.",
    //         icon: "question"
    //     });
    // }
// });

  



















//   =============mis file====
// import {
//     collection,
//     getDocs,
//     updateDoc,
//     doc,
//     setDoc,
//     addDoc,
//     db,
//     arrayUnion, arrayRemove 
//   } from "./firebase.js";
  
//   let submitBtn = document.getElementById("submitBtn");
//   submitBtn.addEventListener("click", async () => {
//     let name = document.getElementById("name");
//     let phone = document.getElementById("phone");
//     let address = document.getElementById("address");
//     let cnic = document.getElementById("cnic");
  
    // add data with random id
    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         name : name.value,
    //         phone : phone.value,
    //         address : address.value,
    //         cnic : cnic.value,
  
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
  
    // add data with decided id
    // try {
    //   await setDoc(doc(db, "users", "42345454545"), {
    //     name: name.value,
    //     phone: phone.value,
    //     address: address.value,
    //     cnic: cnic.value,
    //     favorites: { food: "Pizza", color: "Blue", subject: "recess" }
    //   });
    //   console.log("Document written");
  
    // } catch (e) {
    //   console.log(e);
    // }
  
    // read all documents
    // try {
    //   const querySnapshot = await getDocs(collection(db, "users"));
  
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} =>` ,doc.data());
    //   });
  
    // } catch (e) {
    //   console.log(e);
    // }
  
    // update all documents
  
    // const userRef = doc(db, "users", "42345454545");
    // try {
    //   await updateDoc(userRef, {
    //     "favorites.subject":"Maths",
    //   });
    //   console.log("data updated");
    // } catch (e) {
    //   console.log(e);
    // }
  
  
    // const userRef = doc(db, "users", "64564654654");
  
    // try {
    //   await updateDoc(userRef, {
    //     colors: arrayUnion("red","blue","yellow")
    // });
    //   console.log("array included");
    // } catch (e) {
    //   console.log(e);
    // }
  
//   });