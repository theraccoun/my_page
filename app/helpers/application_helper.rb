module ApplicationHelper

	def full_title(page_title)
		base_title = "smaccoun"
		if page_title.empty?
			base_title
		else
			"#{base_title} | #{page_title}"
		end
	end

	def addColon(page_title)
	  	if page_title.empty?
	  		""
	  	else
	  		": "
	  	end
  end

  def nav_link(link_text, link_path)
	  class_name = current_page?(link_path) ? 'current_page_item' : ''

	  content_tag(:li, :class => class_name) do
	    link_to link_text, link_path
	  end
	end
end
