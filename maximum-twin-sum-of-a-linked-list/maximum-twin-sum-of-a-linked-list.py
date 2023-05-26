# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def pairSum(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: int
        """
        current = head
        values = []

        while current:
            values.append(current.val)
            current = current.next
        
        i = 0
        j = len(values) - 1
        maximumSum = 0
        while(i < j):
            maximumSum = max(maximumSum, values[i] + values[j])
            i = i + 1
            j = j - 1
        
        return maximumSum