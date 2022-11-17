class Movie < ApplicationRecord
  has_many :bookmarks
  before_destroy :check_bookmarks
  has_many :lists, through: :bookmarks

  validates :title, uniqueness: true, presence: true
  validates :overview, presence: true

  private

  def check_bookmarks
    if bookmarks.count > 0
      return false
    end
  end
end
