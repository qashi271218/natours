var cross= document.querySelector('#cross');
cross.addEventListener('click',hide);

function hide(e)
{
	document.querySelector('.popup').style.display = 'none';
}
