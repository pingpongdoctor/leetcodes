// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
function mergeTwoLists(list1: number[], list2: number[]) {
  const mergedList = [...list1, ...list2];
  const sortedList = mergedList.sort((a, b) => a - b);
  return sortedList;
}
