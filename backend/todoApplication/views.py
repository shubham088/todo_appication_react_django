from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import TodoItems
from .serializers import TodoItemsSerializer
from django.http import Http404

# Create your views here.


class TodoList(APIView):
    '''
    list todos or create todo
    '''
    def get(self, request):
        todo_items = TodoItems.objects.all()
        serializer = TodoItemsSerializer(todo_items, many=True)
        return Response(serializer.data, status = 200)


    def post(self, request):
        print("data from request " , request.data)
        serializer = TodoItemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoCRUD(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return TodoItems.objects.get(pk=pk)
        except TodoItems.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        print("key : ", pk)
        snippet = self.get_object(pk)
        serializer = TodoItemsSerializer(snippet)
        print(serializer)
        return Response(serializer.data, status = 200)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = TodoItemsSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)