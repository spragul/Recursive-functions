//Write a recursive function to reverse a string.

/*
"RAGUL"=>"LUGAR"
*/
function reverse(str, count = 0) {
  if (count >= str.length) {
    return "";
  } else {
    return reverse(str, count + 1) + str[count];
  }
}

console.log(reverse("RAGUL"));
console.log(reverse("Hello"));
console.log(reverse("good"));
