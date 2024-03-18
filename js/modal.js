export const modal = () =>{

    return` <div class="message">
      <div class="message-container">
        <h2>Delete comment</h2>

        <p>Aye you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

        <div class="message-confirm">
          <button class="message-cancel">No, cancel</button>
          <button class="message-delete">Yes,delte</button>
        </div>

      </div>
    </div>`;
}