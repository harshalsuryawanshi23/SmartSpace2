import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import * as api from '../services/api.js';
const AppContext=createContext(null);
const SESSION='smart-space-session-v1';
function session(){try{return JSON.parse(localStorage.getItem(SESSION)||'null');}catch{return null;}}
export function AppProvider({children}){
 const [user,setUser]=useState(session);
 const [snapshot,setSnapshot]=useState(null);
 const [loading,setLoading]=useState(true);
 const [toast,setToast]=useState(null);
 const refresh=async()=>{setLoading(true);try{setSnapshot(await api.getSnapshot());}finally{setLoading(false);}};
 useEffect(()=>{refresh();},[]);
 useEffect(()=>{try{if(user)localStorage.setItem(SESSION,JSON.stringify(user));else localStorage.removeItem(SESSION);}catch{}},[user]);
 const notify=(message,type='success')=>{setToast({message,type,key:Date.now()});setTimeout(()=>setToast(null),3600);};
 const act=async(fn,success)=>{try{const result=await fn();await refresh();if(success)notify(success);return result;}catch(e){notify(e.message||'Something went wrong.','error');throw e;}};
 const value=useMemo(()=>({user,setUser,snapshot,loading,toast,notify,refresh,act,api}),[user,snapshot,loading,toast]);
 return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp(){return useContext(AppContext);}
