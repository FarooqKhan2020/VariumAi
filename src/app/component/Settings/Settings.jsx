"use client";
import { useState } from "react";
import Image from "next/image";
import { FaLock, FaSave, FaRegEdit, FaCheck, FaUpload } from "react-icons/fa";
import styles from "./Settings.module.css";

const Settings = () => {
    const [formData, setFormData] = useState({
        displayName: "user0012",
        email: "user0012@gamil.com",
        password: "",
    });

    const [editing, setEditing] = useState({
        displayName: false,
        email: false,
        password: false
    });

    const handleEditClick = (field) => {
        setEditing({
            ...editing,
            [field]: true
        });
    };

    const handleSaveClick = (field) => {
        setEditing({
            ...editing,
            [field]: false
        });
    };

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return (
        <section className={`${styles.settingsSection} mainPadding`}>
            <div className={styles.gradientTopLeft}></div>
            <div className={styles.gradientTopRight}></div>
            <div className={styles.gradientBottomLeft}></div>
            <div className={styles.gradientBottomRight}></div>
            <div className={styles.gradientCenter}></div>
            {/* Heading */}
            <h2 className={`${styles.heading} mainHeading`}>
                <span className="gradientcolor">Your Profiles</span> Settings
            </h2>

            {/* Profile Image + Username */}
            <div className={styles.profileWrapper}>
                <Image
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop"
                    alt="Profile"
                    width={60}
                    height={60}
                    className={styles.profileImage}
                    unoptimized
                />
                <span className={styles.username}>user0012</span>
            </div>

            {/* Form */}
            <form className={styles.form}>
                {/* Display Name */}
                <label className={styles.label}>Display Name</label>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        value={formData.displayName}
                        onChange={(e) => handleInputChange('displayName', e.target.value)}
                        className={styles.input}
                        readOnly={!editing.displayName}
                    />
                    {editing.displayName ? (
                        <FaCheck
                            className={styles.icon}
                            onClick={() => handleSaveClick('displayName')}
                            style={{ color: 'green', cursor: 'pointer' }}
                        />
                    ) : (
                        <FaRegEdit
                            className={styles.icon}
                            onClick={() => handleEditClick('displayName')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>

                {/* Email */}
                <label className={styles.label}>Email</label>
                <div className={styles.inputWrapper}>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={styles.input}
                        readOnly={!editing.email}
                    />
                    {editing.email ? (
                        <FaCheck
                            className={styles.icon}
                            onClick={() => handleSaveClick('email')}
                            style={{ color: 'green', cursor: 'pointer' }}
                        />
                    ) : (
                        <FaRegEdit
                            className={styles.icon}
                            onClick={() => handleEditClick('email')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>

                {/* Password */}
                <label className={styles.label}>Password</label>
                <div className={styles.inputWrapper}>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={styles.input}
                        readOnly={!editing.password}
                        placeholder={editing.password ? "" : "*******"}
                    />
                    {editing.password ? (
                        <FaCheck
                            className={styles.icon}
                            onClick={() => handleSaveClick('password')}
                            style={{ color: 'green', cursor: 'pointer' }}
                        />
                    ) : (
                        <FaRegEdit
                            className={styles.icon}
                            onClick={() => handleEditClick('password')}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </div>

                {/* Profile Image */}
                <label className={styles.label}>Profile Image</label>
                <input type="file" className={styles.fileInput} />
                {/* Save Button */}
                <button type="submit" className={styles.saveButton}>
                    Save <FaSave  className={styles.lockIcon} />
                </button>
            </form>
        </section>
    );
};

export default Settings;