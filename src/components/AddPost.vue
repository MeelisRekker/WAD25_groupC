<template>
 <main>
      <form action="/">      
        <p>
          <label>Post<br>body</label>
          <textarea class="postText" cols="31" rows="10" placeholder="textarea" required></textarea>
        </p>
        <p>
          <label>Select<br>file</label>
          <input type="file" class="postFile">  
        </p>    
          <input type="submit" class="loginBtn" value="Create post">      
      </form>
    </main>    
</template>