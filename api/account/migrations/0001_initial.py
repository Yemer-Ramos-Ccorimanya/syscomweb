# Generated by Django 4.2.9 on 2024-01-21 19:38

from django.db import migrations, models
import django.db.models.deletion
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
                ('direccion', models.CharField(max_length=256, null=True)),
                ('celular', models.CharField(max_length=15, null=True)),
                ('sucursal_por_defecto', models.UUIDField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SerieComprobante',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('serie', models.CharField(max_length=256, null=True)),
                ('tipo_comprobante', models.CharField(max_length=128, null=True)),
                ('correlativo', models.IntegerField(default=0)),
                ('estado', models.BooleanField(default=True)),
                ('empresa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.empresa')),
            ],
        ),
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('cod_sunat', models.CharField(max_length=64, null=True)),
                ('nombre', models.CharField(max_length=256, null=True)),
                ('direccion', models.CharField(max_length=256, null=True)),
                ('descripcion', models.CharField(max_length=256, null=True)),
                ('nombre_contacto', models.CharField(max_length=256, null=True)),
                ('telefono_contacto', models.CharField(max_length=256, null=True)),
                ('correo_contacto', models.CharField(max_length=256, null=True)),
                ('almacen', models.UUIDField(null=True)),
                ('empresa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.empresa')),
            ],
        ),
        migrations.CreateModel(
            name='Terminal',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=256, null=True)),
                ('empresa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.empresa')),
                ('sucursal', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='account.sucursal')),
            ],
        ),
        migrations.CreateModel(
            name='SerieTerminal',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('serie_comprobante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.seriecomprobante')),
                ('terminal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.terminal')),
            ],
        ),
    ]
