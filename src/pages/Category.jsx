import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import ListingItem from "../components/listingItem";
import { useParams } from "react-router";

export default function Category() {
  const [listings, setListings] = useState(null);
  const [loading, SetLoading] = useState(true);
  const [lastFetchListing, setLastFetchListing] = useState(null);
  const params =useParams()
  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, "listings");
        const q = query(
          listingRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(8)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        SetLoading(false);
      } catch (error) {
        toast.error("coudn't fetch listings");
      }
    }
    fetchListings();
  }, [params.categoryName]);
  async function onFetchMoreListing() {
    try {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(4)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevState) => [...prevState, ...listings]);
      SetLoading(false);
    } catch (error) {
      toast.error("coudn't fetch listings");
    }
  }
  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="text-3xl text-center mt-6 mb-6 font-bold">{params.categoryName==="rent"?"Places for rent":"Places for sale"}</h1>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul
              className="sm:grid sm:grid-cols-2 
          lg:grid-cols=3
          xl:grid-cols-4 2xl:grid-cols-5 "
            >
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </main>
          {lastFetchListing && (
            <div className="flex justify-center items-center">
              <button
                onClick={onFetchMoreListing}
                className="bg-white px-3 py-1.5 text-gray-700
             border border-gray-300
              mb-6 mt-6 hover:border-slate-600 rounded transition duration-150
              ease-in-out"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p>There are no Current Offers</p>
      )}
    </div>
  );
}
