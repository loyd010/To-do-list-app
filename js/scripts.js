function newItem(){

  let list = $('#list');
  let li = $('<li></li');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue === ''){
    alert("You must write something!");
  } else{
    list.append(li);
  }

  function lineThrough(){
    li.toggleClass('strike');
    }

  li.on('dblclick', function lineThrough(){
    li.toggleClass('strike')
  })

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem(){
   		li.addClass("delete");
   	}

  $('#list').sortable();
}

$(document).ready(function(){
  $('#button').click(function(){
    $('form').trigger('reset');
  });
})
