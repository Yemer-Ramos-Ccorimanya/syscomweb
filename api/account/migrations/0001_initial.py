# Generated by Django 4.2.9 on 2024-01-20 00:57

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('ruc', models.CharField(max_length=15, null=True)),
                ('rzn_social', models.CharField(max_length=256, null=True)),
                ('address', models.CharField(max_length=256, null=True)),
                ('celular', models.CharField(max_length=15, null=True)),
            ],
        ),
    ]
