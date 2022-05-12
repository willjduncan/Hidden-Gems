const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

// create our Gem model
class Gem extends Model {
    static upvote(body, models) {
      return models.Vote.create({
        user_id: body.user_id,
        gem_id: body.gem_id
      }).then(() => {
        return Gem.findOne({
          where: {
            id: body.gem_id
          },
          attributes: [
            'id',
            'title',
            'created_at',
            [
              sequelize.literal('(SELECT COUNT(*) FROM vote WHERE gem.id = vote.gem_id)'),
              'vote_count'
            ]
          ]
        });
      });
    }
}

Gem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3]
      }
    },
    visitors: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
      }
    },
    activity_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },   
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    lat: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gem'
  }
);

module.exports = Gem;
