import React from 'react'

export default function LoadingDiv() {
    return (
        
        <div className="w-1/2 ">
            <div class="border  border-blue-300 shadow rounded-md p-4   mx-auto">
       <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-blue-400 h-24 w-24"></div>
    <div class="flex-1 space-y-4 py-1">
      <div class="h-4 bg-blue-400 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-blue-400 rounded"></div>
        <div class="h-4 bg-blue-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
        </div>
   
    )
}
