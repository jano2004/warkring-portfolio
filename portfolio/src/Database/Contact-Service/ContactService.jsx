import { db } from '../Connection/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export async function importContactDataIntoDatabase(contactSelect, contactEmail, contactText, contactAffiliate) {
    try {
        await addDoc(collection(db, contactEmail), {
            contactEmail,
            contactSelect,
            contactText,
            contactAffiliate
        });

        console.log('Successfully created doc in:', contactEmail);
        console.log('Successfully created doc: ', contactEmail)
    } catch (error) {
        console.error('Error creating contact', error)
    }
}