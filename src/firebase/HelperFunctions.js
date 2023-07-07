import { db } from "./firebase";

export const formatEmail = (email) => {
    return email.replace(/[.@]/g, '-');
};

export const sendEmailHandler = async ({ toEmail, mail }) => {
    const formattedEmailForInbox = formatEmail(toEmail);
    const inboxRef = db
        .collection("emails")
        .doc(formattedEmailForInbox)
        .collection("inbox");
    const res = await inboxRef.add(mail);
    return res
}

export const sentRecordHandler = async ({ fromEmail, mail }) => {
    const formattedEmailForSentBox = formatEmail(fromEmail);
    const sentBoxRef = db
        .collection("emails")
        .doc(formattedEmailForSentBox)
        .collection("sentBox");
    const res = await sentBoxRef.add(mail);

    return res;
}

export const inboxEmailsHandler = async (email) => {
    const formattedEmail = formatEmail(email);
    const inboxRef = db
        .collection("emails")
        .doc(formattedEmail)
        .collection("inbox");
    const querySnapshot = await inboxRef.get();
    const inboxEmails = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
    }));
    return inboxEmails;
}

export const sentBoxEmailsHandler = async (email) => {
    const formattedEmail = formatEmail(email);
    const sentBoxRef = db
        .collection("emails")
        .doc(formattedEmail)
        .collection("sentBox");
    const querySnapshot = await sentBoxRef.get();
    const sentEmails = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
    }));
    return sentEmails;
}

export const selectedEmailsHandler = async ({ id, emailAddress }) => {
    const formattedEmail = formatEmail(emailAddress);
    const inboxRef = db
        .collection("emails")
        .doc(formattedEmail)
        .collection("inbox")
        .doc(id);
    const emailDoc = await inboxRef.get();

    if (emailDoc.exists) {
        const email = {
            id: emailDoc.id,
            data: emailDoc.data()
        };
        return email;
    } else {
        throw new Error('Email not found');
    }
}

export const selectedSentEmailsHandler = async ({ id, emailAddress }) => {
    const formattedEmail = formatEmail(emailAddress);
    const inboxRef = db
        .collection("emails")
        .doc(formattedEmail)
        .collection("sentBox")
        .doc(id);
    const emailDoc = await inboxRef.get();

    if (emailDoc.exists) {
        const email = {
            id: emailDoc.id,
            data: emailDoc.data()
        };
        return email;
    } else {
        throw new Error('Email not found');
    }
}

