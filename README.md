# What is this?

I was watching a video on Youtube(https://www.youtube.com/watch?v=qli-JCrSwuk) where you actually had to input integers where it would convert integers to alphabets without any issue and fast as possible. It's a pretty much simple script, but it does work well and returns all the result in an array(can be modified to return it in a string).

# How does it work?

It basically has a function where you input integers separated by commas, ex: function('1, 2, 3, 26') will return [ 'a', 'b', 'c', 'z' ] and it also makes use of objects where keys from 1-26 equals to their alphabets and uses a foreach loop to determine which integer can will get converted to an alphabet then push it onto a temporary array and then it returns the array.

