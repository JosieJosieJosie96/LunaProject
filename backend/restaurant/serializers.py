from django.db.models import Avg
from rest_framework import serializers


from restaurant.models import Restaurant
from user.serializers import UserSerializer


class RestaurantCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['user']


class RestaurantGetSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    rating = serializers.SerializerMethodField()
    review_count = serializers.SerializerMethodField()

    def get_rating(self, restaurant):
        restaurant_review = restaurant.review_restaurant.all().aggregate(Avg('rating'))
        return restaurant_review

    def get_review_count(self, restaurant):
        restaurant_review = restaurant.review_restaurant.all().count()
        return restaurant_review

    class Meta:
        model = Restaurant
        fields = '__all__'
