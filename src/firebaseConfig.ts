import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";


export interface Tour {
    id: string;
    name: string;
    image: string;
    time: string;
    price: string;
    khoihanh: string;
    rating: number;
    address: string;
    departure: string;//ngay khoi hanh
    duration: string;//thoi gian
    highlights: string[];
    itinerary: string;//lich trinh
    phone: string;
  }

export interface CompanyIntroduction {
  content: string;
  imageUrl: string;
}

export interface CompanyIntroductionData {
  address: string;
  gmail: string;
  phone: string;
  website: string;
}

  
export const fetchLogoURL = async (): Promise<string> => {
    const storageRef =
        ref(storage, 
        'logos/logo.png');
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  export const fetchBanners = async () => {
    const storage = getStorage();
    const listRef = ref(storage, 'banners/');
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
    return urls.map(url => ({ image: url }));
  };

  export const fetchTours = async (): Promise<Tour[]> => {
    const toursCollection = collection(firestore, 'tours');
    const toursSnapshot = await getDocs(toursCollection);
    const toursList = toursSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        image: data.image,
        time: data.time,
        price: data.price,
        khoihanh: data.khoihanh,
        rating: data.rating,
        address: data.address,
        departure: data.departure,
        duration: data.duration,
        highlights: data.highlights,
        itinerary: data.itinerary,
        phone: data.phone,
      } as Tour;
    });
    return toursList;
  };

  export const fetchCompanyIntroduction = async (): Promise<CompanyIntroduction[]> => {
    const companyIntroductionDoc = collection(firestore, 'companyIntroduction'); 
    const companyIntroductionSnapshot = await getDocs(companyIntroductionDoc);
    const companyIntroductionList = companyIntroductionSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        content: data.content,
        imageUrl: data.imageUrl,
      } as CompanyIntroduction;
    }
    );
    return companyIntroductionList;
  }

  export const fetchCompanyIntroductiondata = async (): Promise<CompanyIntroductionData[]> => {
    const companyIntroductionDoc = collection(firestore, 'companyInfo'); 
    const companyIntroductionSnapshot = await getDocs(companyIntroductionDoc);
    const companyIntroductionList = companyIntroductionSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        address: data.address,
        gmail: data.gmail,
        phone: data.phone,
        website: data.website,
      } as CompanyIntroductionData;
    }
    );
    return companyIntroductionList;
  }
const firebaseConfig = {
  apiKey: "AIzaSyD6HimCyz13Y9ew856k5kohK7G5LJGgrlM",
  authDomain: "travel-123-48553.firebaseapp.com",
  projectId: "travel-123-48553",
  storageBucket: "travel-123-48553.appspot.com",
  messagingSenderId: "958870633268",
  appId: "1:958870633268:web:1d4f2323e09355ee520361",
  measurementId: "G-BFHMGLD7SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { firebaseConfig, app, firestore, storage, auth, getDocs, collection };