// // "use client";
// // import { useState } from "react";
// // import Image from "next/image";
// // import { FaLock, FaRegEdit } from "react-icons/fa";
// // import styles from "./Settings.module.css";

// // const Settings = () => {
// //     const [formData, setFormData] = useState({
// //         displayName: "user0012",
// //         email: "user0012@gamil.com",
// //         password: "",
// //     });

// //     return (
// //         <section className={styles.settingsSection}>
// //             {/* Heading */}
// //             <h2 className={styles.heading}>
// //                 <span className={styles.gradient}>Your Profiles</span> Settings
// //             </h2>

// //             {/* Profile Image + Username */}
// //             <div className={styles.profileWrapper}>
// //                 <Image
// //                     //   src="/profile.png" 
// //                     src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop"
// //                     alt="Profile"
// //                     width={60}
// //                     height={60}
// //                     className={styles.profileImage}
// //                     unoptimized // yeh remove karna hai
// //                 />
// //                 <span className={styles.username}>user0012</span>
// //             </div>

// //             {/* Form */}
// //             <form className={styles.form}>
// //                 {/* Display Name */}
// //                 <label className={styles.label}>Display Name</label>
// //                 <div className={styles.inputWrapper}>
// //                     <input
// //                         type="text"
// //                         value={formData.displayName}
// //                         className={styles.input}
// //                         readOnly
// //                     />
// //                     <FaRegEdit className={styles.icon} />
// //                 </div>

// //                 {/* Email */}
// //                 <label className={styles.label}>Email</label>
// //                 <div className={styles.inputWrapper}>
// //                     <input
// //                         type="email"
// //                         value={formData.email}
// //                         className={styles.input}
// //                         readOnly
// //                     />
// //                     <FaRegEdit className={styles.icon} />
// //                 </div>

// //                 {/* Password */}
// //                 <label className={styles.label}>Password</label>
// //                 <div className={styles.inputWrapper}>
// //                     <input
// //                         type="password"
// //                         placeholder="*******"
// //                         className={styles.input}
// //                     />
// //                     <FaRegEdit className={styles.icon} />
// //                 </div>

// //                 {/* Profile Image */}
// //                 <label className={styles.label}>Profile Image</label>
// //                 <input type="file" className={styles.fileInput} />

// //                 {/* Save Button */}
// //                 <button type="submit" className={styles.saveButton}>
// //                     Save <FaLock className={styles.lockIcon} />
// //                 </button>
// //             </form>
// //         </section>
// //     );
// // };

// // export default Settings;





// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaLock, FaRegEdit, FaCheck } from "react-icons/fa";
// import styles from "./Settings.module.css";

// const Settings = () => {
//     const [formData, setFormData] = useState({
//         displayName: "user0012",
//         email: "user0012@gamil.com",
//         password: "",
//     });

//     const [editing, setEditing] = useState({
//         displayName: false,
//         email: false,
//         password: false
//     });

//     const handleEditClick = (field) => {
//         setEditing({
//             ...editing,
//             [field]: true
//         });
//     };

//     const handleSaveClick = (field) => {
//         setEditing({
//             ...editing,
//             [field]: false
//         });
//     };

//     const handleInputChange = (field, value) => {
//         setFormData({
//             ...formData,
//             [field]: value
//         });
//     };

//     return (
//         <section className={styles.settingsSection}>
//             {/* Heading */}
//             <h2 className={styles.heading}>
//                 <span className={styles.gradient}>Your Profiles</span> Settings
//             </h2>

//             {/* Profile Image + Username */}
//             <div className={styles.profileWrapper}>
//                 <Image
//                     src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop"
//                     alt="Profile"
//                     width={60}
//                     height={60}
//                     className={styles.profileImage}
//                     unoptimized
//                 />
//                 <span className={styles.username}>user0012</span>
//             </div>

//             {/* Form */}
//             <form className={styles.form}>
//                 {/* Display Name */}
//                 <label className={styles.label}>Display Name</label>
//                 <div className={styles.inputWrapper}>
//                     <input
//                         type="text"
//                         value={formData.displayName}
//                         onChange={(e) => handleInputChange('displayName', e.target.value)}
//                         className={styles.input}
//                         readOnly={!editing.displayName}
//                     />
//                     {editing.displayName ? (
//                         <FaCheck
//                             className={styles.icon}
//                             onClick={() => handleSaveClick('displayName')}
//                             style={{ color: 'green', cursor: 'pointer' }}
//                         />
//                     ) : (
//                         <FaRegEdit
//                             className={styles.icon}
//                             onClick={() => handleEditClick('displayName')}
//                             style={{ cursor: 'pointer' }}
//                         />
//                     )}
//                 </div>

//                 {/* Email */}
//                 <label className={styles.label}>Email</label>
//                 <div className={styles.inputWrapper}>
//                     <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => handleInputChange('email', e.target.value)}
//                         className={styles.input}
//                         readOnly={!editing.email}
//                     />
//                     {editing.email ? (
//                         <FaCheck
//                             className={styles.icon}
//                             onClick={() => handleSaveClick('email')}
//                             style={{ color: 'green', cursor: 'pointer' }}
//                         />
//                     ) : (
//                         <FaRegEdit
//                             className={styles.icon}
//                             onClick={() => handleEditClick('email')}
//                             style={{ cursor: 'pointer' }}
//                         />
//                     )}
//                 </div>

//                 {/* Password */}
//                 <label className={styles.label}>Password</label>
//                 <div className={styles.inputWrapper}>
//                     <input
//                         type="password"
//                         value={formData.password}
//                         onChange={(e) => handleInputChange('password', e.target.value)}
//                         className={styles.input}
//                         readOnly={!editing.password}
//                         placeholder={editing.password ? "" : "*******"}
//                     />
//                     {editing.password ? (
//                         <FaCheck
//                             className={styles.icon}
//                             onClick={() => handleSaveClick('password')}
//                             style={{ color: 'green', cursor: 'pointer' }}
//                         />
//                     ) : (
//                         <FaRegEdit
//                             className={styles.icon}
//                             onClick={() => handleEditClick('password')}
//                             style={{ cursor: 'pointer' }}
//                         />
//                     )}
//                 </div>

//                 {/* Profile Image */}
//                 {/* <label className={styles.label}>Profile Image</label>
//                 <input type="file" accept="image/*" className={styles.fileInput} /> */}

//                 {/* Profile Image */}
//                 <label className={styles.label}>Profile Image</label>
//                 <div className={styles.fileUploadWrapper}>
//                     <input
//                         type="file"
//                         id="profileImage"
//                         className={styles.fileInput}
//                         accept="image/*"
//                     />
//                     <label htmlFor="profileImage" className={styles.customFileLabel}>
//                         Choose File
//                     </label>
//                     <span className={styles.fileName}>No File Chosen</span>
//                 </div>


//                 {/* Save Button */}
//                 <button type="submit" className={styles.saveButton}>
//                     Save <FaLock className={styles.lockIcon} />
//                 </button>
//             </form>
//         </section>
//     );
// };

// export default Settings;










































// .settingsSection {
//   background: #000;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 3rem 1.5rem;
//   color: #fff;
// }

// .heading {
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
//   font-style: italic;
// }

// .gradient {
//   background: linear-gradient(90deg, #c6a25d, #f1e2c5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .profileWrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 2rem;
// }

// .profileImage {
//   border-radius: 50%;
// }

// .username {
//   margin-top: 0.5rem;
//   font-size: 1rem;
// }

// .form {
//   width: 100%;
//   max-width: 400px;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// }

// .label {
//   font-weight: 500;
//   margin-bottom: -0.5rem;
// }

// .inputWrapper {
//   position: relative;
// }

// .input {
//   width: 100%;
//   padding: 0.8rem 2.5rem 0.8rem 1rem;
//   border-radius: 6px;
//   border: none;
//   background: #1f1f1f;
//   color: #fff;
// }

// .input:focus {
//   outline: 1px solid #c6a25d;
// }

// .icon {
//   position: absolute;
//   right: 0.8rem;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #ccc;
//   cursor: pointer;
// }

// .fileInput {
//   padding: 0.5rem;
//   background: #1f1f1f;
//   color: #fff;
//   border-radius: 6px;
//   border: none;
// }

// .saveButton {
//   margin-top: 1.5rem;
//   background: transparent;
//   border: 1.5px solid #c6a25d;
//   color: #c6a25d;
//   font-weight: bold;
//   padding: 0.8rem 1.5rem;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
// }

// .saveButton:hover {
//   background: #c6a25d;
//   color: #000;
// }

// .lockIcon {
//   font-size: 1rem;
// }





// .fileUploadWrapper {
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   background: #1f1f1f;
//   padding: 0.6rem 1rem;
//   border-radius: 6px;
//   border: 1.5px solid #333;
//   cursor: pointer;
// }

// .fileInput {
//   display: none; /* hide default input */
// }

// .customFileLabel {
//   background: #2d2d2d;
//   padding: 0.4rem 1rem;
//   border-radius: 4px;
//   border: 1px solid #555;
//   color: #fff;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: all 0.2s ease;
// }

// .customFileLabel:hover {
//   background: #c6a25d;
//   color: #000;
// }

// .fileName {
//   color: #aaa;
//   font-size: 0.9rem;
//   font-style: italic;
// }
