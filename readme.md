# Cahey
very pog cache key-value "database" 100% free and lightweight :)

example:
```js
const Cahey = require("cahey")
const Server = new Cahey.Server()
const Session = Server.createSession("mySession" /* name, usually it's an IP, so each IP has 1 second of cache! */, 1000 /* each 1 second refresh cache */)

const express = require("express")
Session.store("api-response", {a: new Date()})

const app = express()

app.get("/", (req, res) => {
    res.json(Session.grabOrRenew("api-response" /* key name */, () => {
        // this function refreshes the value each 1 second
        return {a: new Date()}
    }))
})

app.listen(1010)
``` 
 U s a g e :   n p m   < c o m m a n d >  
  
 w h e r e   < c o m m a n d >   i s   o n e   o f :  
         a c c e s s ,   a d d u s e r ,   a u d i t ,   b i n ,   b u g s ,   c ,   c a c h e ,   c i ,   c i t ,  
         c l e a n - i n s t a l l ,   c l e a n - i n s t a l l - t e s t ,   c o m p l e t i o n ,   c o n f i g ,  
         c r e a t e ,   d d p ,   d e d u p e ,   d e p r e c a t e ,   d i s t - t a g ,   d o c s ,   d o c t o r ,  
         e d i t ,   e x p l o r e ,   f u n d ,   g e t ,   h e l p ,   h e l p - s e a r c h ,   h o o k ,   i ,   i n i t ,  
         i n s t a l l ,   i n s t a l l - c i - t e s t ,   i n s t a l l - t e s t ,   i t ,   l i n k ,   l i s t ,   l n ,  
         l o g i n ,   l o g o u t ,   l s ,   o r g ,   o u t d a t e d ,   o w n e r ,   p a c k ,   p i n g ,   p r e f i x ,  
         p r o f i l e ,   p r u n e ,   p u b l i s h ,   r b ,   r e b u i l d ,   r e p o ,   r e s t a r t ,   r o o t ,  
         r u n ,   r u n - s c r i p t ,   s ,   s e ,   s e a r c h ,   s e t ,   s h r i n k w r a p ,   s t a r ,  
         s t a r s ,   s t a r t ,   s t o p ,   t ,   t e a m ,   t e s t ,   t o k e n ,   t s t ,   u n ,  
         u n i n s t a l l ,   u n p u b l i s h ,   u n s t a r ,   u p ,   u p d a t e ,   v ,   v e r s i o n ,   v i e w ,  
         w h o a m i  
  
 n p m   < c o m m a n d >   - h     q u i c k   h e l p   o n   < c o m m a n d >  
 n p m   - l                         d i s p l a y   f u l l   u s a g e   i n f o  
 n p m   h e l p   < t e r m >       s e a r c h   f o r   h e l p   o n   < t e r m >  
 n p m   h e l p   n p m             i n v o l v e d   o v e r v i e w  
  
 S p e c i f y   c o n f i g s   i n   t h e   i n i - f o r m a t t e d   f i l e :  
         C : \ U s e r s \ d 4 r c k \ . n p m r c  
 o r   o n   t h e   c o m m a n d   l i n e   v i a :   n p m   < c o m m a n d >   - - k e y   v a l u e  
 C o n f i g   i n f o   c a n   b e   v i e w e d   v i a :   n p m   h e l p   c o n f i g  
  
 n p m @ 6 . 1 4 . 7   C : \ P r o g r a m   F i l e s \ n o d e j s \ n o d e _ m o d u l e s \ n p m  
  
 D i d   y o u   m e a n   t h i s ?  
         i n i t  
 #   c a h e y  
 