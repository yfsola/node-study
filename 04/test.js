// // 合并两个有序链表
// function mergeTwoLists(l1,l2) {
//   if(l1 == null) return l2
//   if(l2 == null) return l1
//   if(l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next,l2)
//     return l1
//   } else {
//     l2.next = mergeTwoLists(l2.next,l1)
//     return l2
//   }
// }

// function merge(l1,l2) {
//   if(l1 == null) return l2
//   if(l2 == null) return l1

//   if(l1.val <= l2.val) {
//     l1.next = merge(l1.next,l2)
//     return l1
//   } else {
//     l2.next = merge(l2.next,l1)
//     return l2
//   }
// }


// var objUser = {
//   count:1,
//   getUserCount: function() {
//     return this.count;
//   }
// }
// var fnc = objUser.getUserCount
// console.log(fnc(),objUser.getUserCount())

var a = {a:1},b={b:2}
!function(ar1,ar2){
  console.log(ar1)
  ar1 = ar2
  console.log(ar1)
  ar2['c'] = 3
}(a,b)
console.log(a,b)

{/* <ul id="test">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul> */}
